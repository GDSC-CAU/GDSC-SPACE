import { FirebaseApp, initializeApp } from '@firebase/app'
import { doc, Firestore, getDoc, getFirestore } from '@firebase/firestore'
import { MainProjects, MainTimelines, Members } from '~/interfaces/FirebaseAPI'
import { API_MAIN_PROJECTS, API_MAIN_TIMELINES, API_MEMBER_LIST, MEMBER_DATA } from '~/src/interfaces'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
}

let firebaseApp: FirebaseApp
let firebaseDB: Firestore

const initFirebase = () => {
    firebaseApp = initializeApp(firebaseConfig)
    firebaseDB = getFirestore()
}

export const getMainProjectDB = async () => {
    if (firebaseApp === undefined || firebaseDB === undefined) {
        initFirebase()
    }

    const ProjectList: API_MAIN_PROJECTS = {
        MAIN_PROJECT_CNT: 0,
        MAIN_PROJECT_LIST: [],
    }

    const projectDocData = await getDoc(doc(firebaseDB, 'Main', 'Projects'))
    if (!projectDocData.exists()) {
        return ProjectList
    }

    projectDocData.data().list.forEach((projItem: MainProjects) => {
        ProjectList.MAIN_PROJECT_CNT++
        ProjectList.MAIN_PROJECT_LIST.push({
            PROJECT_DESCRIPTION: projItem.Description,
            PROJECT_ID: projItem.ID,
            PROJECT_IMAGE: projItem.Image,
            PROJECT_IMAGE_SUB: projItem.Image_sub,
            PROJECT_SUBTITLE: projItem.Subtitle,
            PROJECT_TITLE: projItem.Title,
        })
    })

    return ProjectList
}

export const getMainTimelineDB = async () => {
    if (firebaseApp === undefined || firebaseDB === undefined) {
        initFirebase()
    }

    const TimelineList: API_MAIN_TIMELINES = {
        MAIN_TIMELINE_CNT: 0,
        MAIN_TIMELINE_LIST: [],
    }

    const timelineDocData = await getDoc(doc(firebaseDB, 'Main', 'Timelines'))
    if (!timelineDocData.exists()) {
        return TimelineList
    }

    timelineDocData.data().list.forEach((projItem: MainTimelines) => {
        TimelineList.MAIN_TIMELINE_CNT++
        TimelineList.MAIN_TIMELINE_LIST.push({
            TIMELINE_CARD_TITLE: projItem.Card_title,
            TIMELINE_DATE: projItem.Date,
            TIMELINE_DESCRIPTION: projItem.Description,
            TIMELINE_TITLE: projItem.Title,
        })
    })

    return TimelineList
}

export const getMemberDB = async (year: string) => {
    if (firebaseApp === undefined || firebaseDB === undefined) {
        initFirebase()
    }

    const MemberList: API_MEMBER_LIST = {
        MEMBER_CNT: 0,
        MEMBER_LIST: [],
    }

    const memberDocData = await getDoc(doc(firebaseDB, 'Members', year))
    if (!memberDocData.exists()) {
        return MemberList
    }

    memberDocData.data().list.forEach((memberItem: Members) => {
        MemberList.MEMBER_CNT++
        MemberList.MEMBER_LIST.push({
            MEMBER_COMMENT: memberItem.Comment,
            MEMBER_EMAIL: memberItem.Email,
            MEMBER_GENDER: memberItem.Gender as MEMBER_DATA['MEMBER_GENDER'],
            MEMBER_IMAGE: memberItem.Image,
            MEMBER_INSTAGRAM: memberItem.Instagram,
            MEMBER_LINK_BEHANCE: memberItem.Behance,
            MEMBER_LINK_GITHUB: memberItem.Github,
            MEMBER_NAME: memberItem.Name,
            MEMBER_NICKNAME: memberItem.Nickname,
            MEMBER_POSITION: memberItem.Position,
            MEMBER_ROLE: memberItem.Role as MEMBER_DATA['MEMBER_ROLE'],
            MEMBER_YEAR: `${year}기` as MEMBER_DATA['MEMBER_YEAR'],
        })
    })

    return MemberList
}

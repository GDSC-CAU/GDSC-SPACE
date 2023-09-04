import { FirebaseApp, initializeApp } from '@firebase/app'
import { collection, doc, Firestore, getDoc, getDocs, getFirestore } from '@firebase/firestore'
import { MainProjects, MainTimelines, Members } from '~/interfaces/FirebaseAPI'
import {
    API_EVENT_DETAIL,
    API_EVENT_LIST,
    API_MAIN_PROJECTS,
    API_MAIN_TIMELINES,
    API_MEMBER_LIST,
    MEMBER_DATA,
} from '~/src/interfaces'

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

export const getEventDetailDB = async (id: string) => {
    if (firebaseApp === undefined || firebaseDB === undefined) {
        initFirebase()
    }

    const EventData: API_EVENT_DETAIL = {
        EVENT_CONTENT: undefined,
        EVENT_DATE: '',
        EVENT_DESCRIPTION: '',
        EVENT_LINK: '',
        EVENT_NOTION_ID: '',
        EVENT_THUMBNAIL: '',
        EVENT_TITLE: '',
        EVENT_TYPE: '',
    }

    const eventDocData = await getDoc(doc(firebaseDB, 'Event', id))
    if (!eventDocData.exists()) {
        return EventData
    }

    EventData.EVENT_DATE = eventDocData.get('Date')
    EventData.EVENT_DESCRIPTION = eventDocData.get('Description')
    EventData.EVENT_LINK = eventDocData.get('Link')
    EventData.EVENT_NOTION_ID = eventDocData.get('NotionID')
    EventData.EVENT_THUMBNAIL = eventDocData.get('Thumbnail')
    EventData.EVENT_TITLE = eventDocData.get('Title')
    EventData.EVENT_TYPE = eventDocData.get('Type')

    return EventData
}

export const getEventListDB = async () => {
    if (firebaseApp === undefined || firebaseDB === undefined) {
        initFirebase()
    }

    const EventList: API_EVENT_LIST = {
        EVENT_CNT: 0,
        EVENT_LIST: [],
    }

    const eventDocsData = await getDocs(collection(firebaseDB, 'Event'))
    if (eventDocsData.empty) {
        return EventList
    }

    eventDocsData.forEach((eventItem) => {
        EventList.EVENT_CNT++
        EventList.EVENT_LIST.push({
            EVENT_DATE: eventItem.get('Date'),
            EVENT_DESCRIPTION: eventItem.get('Description'),
            EVENT_ID: eventItem.id,
            EVENT_LINK: eventItem.get('Link'),
            EVENT_NOTION_ID: eventItem.get('NotionID'),
            EVENT_THUMBNAIL: eventItem.get('Thumbnail'),
            EVENT_TITLE: eventItem.get('Title'),
            EVENT_TYPE: eventItem.get('Type'),
        })
    })

    return EventList
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

    projectDocData.data().list?.forEach((projItem: MainProjects) => {
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

    timelineDocData.data().list?.forEach((timelineItem: MainTimelines) => {
        TimelineList.MAIN_TIMELINE_CNT++
        TimelineList.MAIN_TIMELINE_LIST.push({
            TIMELINE_CARD_TITLE: timelineItem.Card_title,
            TIMELINE_DATE: timelineItem.Date,
            TIMELINE_DESCRIPTION: timelineItem.Description,
            TIMELINE_TITLE: timelineItem.Title,
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

    memberDocData.data().list?.forEach((memberItem: Members) => {
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

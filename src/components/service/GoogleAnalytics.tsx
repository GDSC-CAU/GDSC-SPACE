'use client'

import { Partytown } from '@builder.io/partytown/react'
import Script from 'next/script'

const GoogleAnalytics = ({ googleAnalyticsID }: { googleAnalyticsID: string }) => {
    if (!googleAnalyticsID) throw new Error('<googleAnalyticsID> is required.')
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') return <></>

    return (
        <>
            <Partytown forward={['dataLayer.push', 'gtag']} />
            <Script type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`} />
            <script
                data-partytown-config
                dangerouslySetInnerHTML={{
                    __html: `
                            partytown = {
                                lib: "/_next/static/~partytown/",
                            };
                        `,
                }}
            />
            <script
                type="text/partytown"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            window.gtag = function gtag(){window.dataLayer.push(arguments);};
                            gtag('js', new Date());
                            gtag(
                                'config', 
                                '${googleAnalyticsID}',
                                {
                                    page_path: window.location.pathname,
                                }
                            );
                        `,
                }}
            />
        </>
    )
}

export { GoogleAnalytics }

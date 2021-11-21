import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import ArrowLeft from '@/components/ArrowLeft';

const CenteredLayout = ({ children, classes }) => {
    const router = useRouter();
    return (
        <div className={ `flex flex-col h-screen bg-concrete-500 ${ classes ? classes : '' }` }>
            {
                router.pathname !== '/' && 
                    <div className="p-2">
                        <Link href="/" >
                            <a className="nav-link flex items-center justify-center w-10 h-10 m-2 rounded-full bg-monza-500 hover:bg-mantis-500">
                                <div className="flex items-center">
                                    <ArrowLeft classes="text-concrete-500" />
                                </div>
                            </a>
                        </Link>
                    </div>
            }
            <div className={ 'flex flex-grow items-center justify-center' }>
                { children }
            </div>
        </div>
    )
}

export default CenteredLayout;

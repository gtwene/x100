import React, { useState } from 'react'
import {IoMdHelpCircle} from 'react-icons/io'
import {BsFillBootstrapFill, BsFillPeopleFill, BsBadge3D, BsChatQuoteFill, BsEmojiSunglasses, BsMailbox, BsMailbox2} from 'react-icons/bs'

const KnowledgeDB = ( bgImage ) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleHover = () => {
        setIsHovering(true)
    }

    const handleHoverOut = () => {
        setIsHovering(false)
    }

    const customTheme = JSON.parse(localStorage.getItem('theme'));

    // console.log(customTheme);

    const [getTheme, setTheme] = useState(customTheme);

    // console.log(bgImage);

  return (
    <div className='fixed bottom-0 right-0'>
        
        <div onMouseOver={handleHover} onMouseLeave={() => setIsHovering(false)} className="" >
            {isHovering && (
                <div className='absolute right-0 bottom-0 needHelp'>
                {/* <Card_With_KnowledgeDB handleHover={handleHover} handleHoverOut={handleHoverOut} /> */}

                <div className="py-5 px-3">
        <div className='-mr-2'>
        
    <div onMouseEnter={() => setIsHovering(true)} className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-2xl sm:p-4 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-3">
        <h5 className="text-[16px] font-bold leading-none -mt-1 text-gray-900 dark:text-white" style={{ overflow: "nowrap" }}>Knowledge&nbsp;Database</h5>
        
    </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-1 sm:py-1">
                        <div className="flex items-center space-x-4 -ml-8 cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 -mb-2 mt-1 hover:scale-110 duration-300">
                            <div className="flex-shrink-0">
                                <BsFillBootstrapFill className="w-5 h-5 -mt-4 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Contact Suport
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-1 sm:py-1">
                        <div className="flex items-center space-x-4 -ml-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 -mb-2 mt-2 hover:scale-110 duration-300">
                            <div className="flex-shrink-0">
                                <BsFillPeopleFill className="w-5 h-5 -mt-4 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    View FAQs
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-1 sm:py-1">
                        <div className="flex items-center space-x-4 -ml-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 -mb-2 mt-2 hover:scale-110 duration-300">
                            <div className="flex-shrink-0">
                                <BsBadge3D className="w-5 h-5 -mt-4 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    System Documentation
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-1 sm:py-1">
                        <div className="flex items-center space-x-4 -ml-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 -mb-2 mt-2 hover:scale-110 duration-300">
                            <div className="flex-shrink-0">
                                <BsChatQuoteFill className="w-5 h-5 -mt-4 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Knowledge Database
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-1 sm:py-1">
                        <div className="flex items-center space-x-4 -ml-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 -mb-2 mt-2 hover:scale-110 duration-300">
                            <div className="flex-shrink-0">
                                <BsMailbox2 className="w-5 h-5 -mt-4 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Send Email
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="pt-1 pb-0 sm:pt-2">
                        <div className="flex items-center space-x-4 -ml-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 -mb-6 mt-2 hover:scale-110 duration-300">
                            <div className="flex-shrink-0">
                                <BsEmojiSunglasses className="w-5 h-5 -mt-4 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Visit Website
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
        </div>

    </div>
    </div>

                </div>
            )}
            <div className='absolute right-0 bottom-6 z-30 needHelpQuestionMark'>
                <div className="flex-shrink-0 ">
                    {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/471/471664.png" alt="Neil image" /> */}
                    <IoMdHelpCircle className="w-8 h-8 rounded-full" style={{ marginTop: "-38px" }} />
                </div>
            </div>
            <a href="#" style={{ background: customTheme.theme.navBarColor, borderTopRightRadius: "7px", borderTopLeftRadius: "7px" }} className="needHelpLable block max-w-sm p-1 border border-gray-200  shadow-2xl shadow-slate-800 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 absolute right-0 bottom-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                <h5 style={{ fontSize: "15px", overflow: "nowrap" }} className="mb-2 mt-1 font-bold tracking-tight text-gray-900 dark:text-white px-2">Need&nbsp;Help&nbsp;With&nbsp;Something</h5>
            </a>
        </div>
    </div>
  )
}

export default KnowledgeDB;
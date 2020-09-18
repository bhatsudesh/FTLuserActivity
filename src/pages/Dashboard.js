import React, { useState, useEffect } from 'react'
import './wave.css'
import NavBar from '../components/Nav/NavBar'
import UserCard from '../components/UserCard/UserCard'
import Modal from '../components/Modal/Modal'
import { usersJSON } from '../data/users'

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [filterBy, setFilterBy] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [activeTimeResult, setActiveTimeResult] = useState([]);
    const [userActiveTimes, setUserActiveTimes] = useState([])

    useEffect(() => {
        setUsers([...usersJSON])
    }, [])

    useEffect(() => {
        clickHandler(new Date());
    }, [showModal])

    const handleFilter = (e) => {
        setFilterBy(e.target.value);
    }

    const activeClicked = (activeTimeArray) => {
        setShowModal(true);
        setUserActiveTimes(activeTimeArray)
    }

    const clickHandler = (value) => {
        let selectedDate = value.toString().slice(4, 15)
        let activeResult = userActiveTimes.filter((time) => {
            return time.start_time.includes(selectedDate)
        })
        setActiveTimeResult(activeResult)
    }
    return (
        <div>
            {/* wave animation start */}
            <div className="header w-full">
                <div className="">
                    <NavBar
                        onFilter={handleFilter} />
                </div>

                <section className="px-3 lg:px-48 mt-20 lg:mt-32">
                    <h2 className="text-left font-medium text-base lg:text-lg pl-1 text-white tracking-tight mb-2 mt-5">
                        FTL Users
                    </h2>
                    <hr />
                </section>

                <div className="pt-48 relative">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div >
            {/* wave animation end */}

            <div className="mt-32 lg:mt-48 grid sm:grid-cols-3 md:grid-cols-4 gap-10 lg:px-48 px-3 absolute">
                {users.map((mems) => (
                    mems.members
                        .filter((user) => {
                            return user.real_name.toLowerCase().includes(filterBy.toLowerCase());
                        })
                        .map((user) => (
                            <UserCard
                                key={user.id}
                                name={user.real_name}
                                Id={user.id}
                                timeZone={user.tz}
                                activeClicked={() => { activeClicked(user.activity_periods) }} />
                        ))
                ))

                }
            </div>
            {showModal ? (
                <Modal
                    closeModal={() => {
                        setShowModal(false);
                    }}
                    activeTimeResult={activeTimeResult}
                    clickHandler={clickHandler}
                />
            ) : null}
        </div>
    )
}

export default Dashboard
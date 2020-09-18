import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Modal = ({ closeModal, activeTimeResult, clickHandler }) => {
    return (
        <div
            className="flex h-full w-full fixed top-0 left-0 bg-transparent-black justify-center items-center z-50"
            style={{
                backgroundColor: "#00000030",
            }}
        >
            <div className="block bg-white w-11/12 md:w-2/3 lg:w-2/4 mx-auto my-4 py-4 max-h-full overflow-y-auto relative rounded-lg">
                <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 p-2 focus:outline-none"
                >
                    <svg width="24" height="24">
                        <rect width="24" height="24" fill="none" rx="0" ry="0" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.3345 3.77817C18.7487 3.19239 17.799 3.19239 17.2132 3.77817L11.5563 9.43503L5.89948 3.77817C5.31369 3.19239 4.36395 3.19239 3.77816 3.77817C3.19237 4.36396 3.19237 5.31371 3.77816 5.89949L9.43502 11.5563L3.77816 17.2132C3.19238 17.799 3.19237 18.7487 3.77816 19.3345C4.36395 19.9203 5.3137 19.9203 5.89948 19.3345L11.5563 13.6777L17.2132 19.3345C17.799 19.9203 18.7487 19.9203 19.3345 19.3345C19.9203 18.7487 19.9203 17.799 19.3345 17.2132L13.6777 11.5563L19.3345 5.89949C19.9203 5.31371 19.9203 4.36396 19.3345 3.77817Z"
                            fill="#a0aec0"
                        />
                    </svg>
                </button>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 px-4 py-2">
                        <div className="w-full pr-2 md:pr-4">
                            <span>
                                <h2 className="text-center text-xl font-bold text-gray-800 pb-5">
                                    User Periods of Activity <span className="text-xs font-hairline"></span>
                                </h2>
                            </span>
                            {   
                                (activeTimeResult != '') ? (
                                activeTimeResult.map((time) => (
                                    
                                        <table className="table-auto border-collapse w-full p-2" key={time.start_time}>
                                            <thead>
                                                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left bg-gray-200">
                                                    <th className="px-4 py-2">Date</th>
                                                    <th className="px-4 py-2">From</th>
                                                    <th className="px-4 py-2">To</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm font-normal text-gray-700">
                                                <tr className="hover:bg-gray-100 rounded py-4">

                                                    <td className="px-4 py-4">{time.start_time.slice(0, 11)}</td>
                                                    <td className="px-4 py-4">{time.start_time.slice(12,)}</td>
                                                    <td className="px-4 py-4">{time.end_time.slice(12,)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ))

                                ) : (
                                    <h2 className="text-center text-base font-bold text-red-600 pb-5">
                                        No Record Found
                                    </h2>)
                            }
                        </div>
                        <div className="max-w-sm">
                            <Calendar
                                onClickDay={clickHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
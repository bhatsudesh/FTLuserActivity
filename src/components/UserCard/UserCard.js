import React from 'react'

const UserCard = ({ name, Id, timeZone, activeClicked }) => {
    return (
        <div className="bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl rounded-rd m-2 w-auto" key={Id}>
            <img src={require('../../assets/images/profile3.jpg')} alt="random" className="w-full h-48 sm:h-48 object-cover" />
            <div className="m-4">
                <span className="text-gray-800 text-xl sm:py-2 font-bold">{name}</span>
                <div className="flex justify-between text-gray-700">
                    <div className="font-semibold">ID:</div>
                    <div className="">{Id}</div>
                </div>
                <div className="flex justify-between text-gray-700">
                    <div className="font-semibold">T-Zone:</div>
                    <div className="">{timeZone}</div>
                </div>
                <div className="flex justify-end my-2">
                    <a href="#" className="text-lg font-medium text-indigo-500 hover:bg-gray-300 hover:shadow-sm px-2 rounded-full" onClick={activeClicked}>Active Log</a>
                </div>
            </div>
        </div>
    );
}

export default UserCard
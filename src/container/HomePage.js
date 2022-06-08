import React from 'react'

const HomePage = ({ data }) => {
    return (
        <>
            {
                data.map((d, i) => {
                    return (
                        <>
                            <div key={i}>
                                <h3>{d.id} : {d.name}</h3>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default HomePage

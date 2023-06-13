import React from "react";

const Split1 = () => {
    return(
        <React.Fragment>
            <section>
                <div className='w-screen h-sreen grid grid-rows-2'>
                    <div className='w-full h-full bg-beige-800 centered'>
                        <p>Page 1</p>
                    </div>
                    {/* pagina 2*/}
                    <div className='w-full h-full bg-black text-white centered'>
                        <p>Page 2</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Split1;
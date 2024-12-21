import photoS1 from "/src/assets/section1/photoS1.png"

const Section1 = props => {



    return (
        <div className="bg-white px-28 py-20 flex flex-row content-center items-center justify-center">

            <div className="w-1/2">
                <div className="flex flex-col text-5xl pb-10">
                    <h1 className="font-bold">ДАВАЙТЕ</h1>
                    <h2 className="italic font-thin">ЗНАЙОМИТИСЯ</h2>
                    <h1 className="font-bold">МИ GLOWEN</h1>
                </div>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eaque fuga! Ea eius iste neque possimus qui ratione recusandae saepe sed temporibus voluptas. Aliquam deleniti, dignissimos eius laboriosam quas recusandae?</h3>
            </div>

            <div className="w-1/2">
                <img width="700px" src={photoS1} alt=""/>
            </div>
        </div>
    )
}

export default Section1
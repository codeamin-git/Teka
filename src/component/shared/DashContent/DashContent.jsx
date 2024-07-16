
const DashContent = () => {
    return (
        <div className="p-2">
            <h1 className="text-4xl">Welcome to <span className="text-5xl"><span className="text-[#008000]">Teka</span> <span className="text-red-500">Kori</span></span></h1>
            <p className="my-4 text-xl">Please <span className="text-[#FF3333] animate animate-pulse">login</span> to explore all of our features</p>
            <div className="flex flex-col w-full gap-4 my-5 text-black">
                <button className="btn btn-ghost bg-orange-300 hover:text-white">Login</button>
                
            </div>
        </div>
    );
};

export default DashContent;
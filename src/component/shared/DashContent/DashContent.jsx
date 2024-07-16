
const DashContent = () => {
    return (
        <div className="p-2">
            <h1 className="text-4xl">Welcome to <span className="text-5xl">Teka Kori</span></h1>
            <div className="flex flex-col w-full gap-4 p-4">
                <button className="btn bg-green-300">User Login</button>
                <button className="bg-yellow-200 btn btn-ghost">Agent Login</button>
            </div>
        </div>
    );
};

export default DashContent;
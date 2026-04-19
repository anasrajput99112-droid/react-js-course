function footer() {
    return (
        <>
        <footer className="bg-gray-800">
            <div className="p-4 flex item-center justify-evenly text-sm text-gray-400">
                <div className="flex flex-col space-y-2 text-center p-4">
                    <h3>Affilte with us</h3>
                    <h3>Customer support</h3>
                    <h3>Gift Cards</h3>
                    <h3>Beauty</h3>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                    <h3>Amazon Pay</h3>
                    <h3>Amazon Business</h3>
                    <h3>Amazon Music</h3>
                    <h3>Amazon Advertising</h3>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                    <h3>Amazon Science</h3>
                    <h3>Amazon Web Services</h3>
                    <h3>Amazon Prime Video</h3>
                    <h3>Amazon Drive</h3>
                </div>
            </div>
            <hr />
            <p className=" text-white p-4 text-center">&copy; 2023 Amazon. All rights reserved.</p>
        </footer>
        </>
    )
}

export default footer;
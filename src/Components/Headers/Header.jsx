import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 p-5 mx-5'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile}/> 
        </div>
    );
};

export default Header;
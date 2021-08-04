import Image from 'next/image'
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from '@heroicons/react/solid'

import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const Header = () => {

    const [session] = useSession();
    const router = useRouter();

    return (
        <header className="bg-[#040714] sticky h-[72px] px-10 md:px-12 flex items-center">
            <Image
                src="/images/logo.svg"
                width={80}
                height={80}
                className="cursor-pointer"
                onClick={() => router.push('/')}
            />
            {
                session && (
                    <div className="hidden ml-10 md:flex items-center space-x-6">
                        <a className="header-link group ">
                            <HomeIcon className="h-4" />
                            <span className="span">Home</span>
                        </a>

                        <a className="header-link group ">
                            <SearchIcon className="h-4" />
                            <span className="span">Search</span>
                        </a>

                        <a className="header-link group ">
                            <PlusIcon className="h-4" />
                            <span className="span">Watchlist</span>
                        </a>

                        <a className="header-link group ">
                            <StarIcon className="h-4" />
                            <span className="span">Originals</span>
                        </a>

                        <a className="header-link group ">

                            <img src="/images/movie-icon.svg"
                                className="h-5"
                            />
                            <span className="span">Movies</span>
                        </a>
                        <a className="header-link group ">
                            <img className="h-5"
                                src="/images/series-icon.svg"
                            />
                            <span className="span">Series</span>
                        </a>
                    </div>
                )
            }
            {
                !session ? (
                    <button className="ml-auto border uppercase px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
                        onClick={signIn}
                    >
                        Login
                    </button>
                ) : (
                    <img
                        className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
                        src={session.user.image} alt={session.user.name}
                        onClick={signOut}
                    />
                )
            }



        </header>
    )
}

export default Header;



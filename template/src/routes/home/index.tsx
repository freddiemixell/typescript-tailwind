import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={`${style.home} dark`}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <div class="bg-white dark:bg-gray-800">
                <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
                <p class="text-gray-600 dark:text-gray-300">
                    Lorem ipsum...
                </p>
            </div>
        </div>
    );
};

export default Home;

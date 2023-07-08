import { AuthNav } from 'components/WelcomePageComponents/AuthNav';
const Welcome = () => {
  return (
    <div>
      <section>
        <div>
          <div>
            <h2>LOGO</h2>
          </div>
          <h1>Welcome to the app!</h1>
          <p>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
          <AuthNav />
        </div>
      </section>
    </div>
  );
};

export default Welcome;

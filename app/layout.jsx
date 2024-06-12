import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "pomptopia",
  description: "A simple, web that help people to share their magic prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

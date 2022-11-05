import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from '@mui/material/styles';

function Layout() {
    const theme = useTheme()
    return (
        <body>
            <div style={
                {
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }
            }>
                <Header></Header>
                <main style={{ flex: '1 0 auto', background: theme.palette.primary.main }}>
                    <Outlet />
                </main>
                <Footer></Footer>
            </div>
        </body >
    )
}

export default Layout
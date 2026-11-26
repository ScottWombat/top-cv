import { HeaderWrapper,HeaderColumn1,HeaderColumn2,HeaderLeft,HeaderRight,Logo,CV,First,Slogan } from "./index.styled";
import NavBar from '../navbar'
const Header =() =>{
    return(
        <>
        <HeaderWrapper>
            <HeaderColumn1>
                <HeaderLeft>
                    <Logo>
                        <CV>CV</CV>
                        <First>FIRST</First>
                    </Logo>
                    <Slogan>Intelligent CV formatting for instant impact</Slogan>
                </HeaderLeft>
            </HeaderColumn1>
            <HeaderColumn2>
                <HeaderRight>
                <NavBar/>
                </HeaderRight>
            </HeaderColumn2>
        </HeaderWrapper>
        </>
    )
}

export default Header;
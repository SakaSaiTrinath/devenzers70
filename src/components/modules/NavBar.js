import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/user";

function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <Menu borderless>
        <Container text>
          <Menu.Item header>LightPay</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/investments">
              Investments
            </Menu.Item>
            <Menu.Item
              onClick={() =>
                dispatch(
                  logoutAction(() => {
                    history.push("/");
                  })
                )
              }
            >
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default NavBar;

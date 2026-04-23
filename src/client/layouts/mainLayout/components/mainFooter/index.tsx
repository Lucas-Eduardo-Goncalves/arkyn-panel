import { Button, Divider, Input } from "@arkyn/components";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router";

import arkynFullLogo from "~/client/assets/arkynFullLogo.png";
import {
  CodeSection,
  ColumnsContainer,
  Content,
  ImageContainer,
  NavSection,
  MainFooterContainer,
} from "./styles";

function MainFooter() {
  return (
    <MainFooterContainer>
      <Content>
        <NavSection>
          <ImageContainer>
            <img src={arkynFullLogo} alt="logo" />
            <strong>Keep up to date</strong>
            <p>Join our newsletter for regular updates. No spam ever.</p>
            <div>
              <Input name="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </ImageContainer>

          <ColumnsContainer>
            <div>
              <strong>Products</strong>
              {/* <Link to="https://docs.arkyn.dev/docs/api/introduction">Api</Link> */}
              <Link to="">Library</Link>
              <Link to="">Design System</Link>
            </div>

            <div>
              <strong>Resources</strong>
              <Link to="https://docs.arkyn.dev/docs/components/introduction">
                @arkyn/components
              </Link>
              <Link to="https://docs.arkyn.dev/docs/server/introduction">
                @arkyn/server
              </Link>
              <Link to="https://docs.arkyn.dev/docs/shared/introduction">
                @arkyn/shared
              </Link>
              <Link to="https://docs.arkyn.dev/docs/templates/introduction">
                @arkyn/templates
              </Link>
            </div>

            <div>
              <strong>Explore</strong>
              <Link to="https://docs.arkyn.dev/docs/introduction">
                Documentation
              </Link>
              <Link to="/guides/introduction">Guides</Link>
            </div>

            <div>
              <strong>Company</strong>
              <Link to="https://docs.arkyn.dev/docs/about">About</Link>
              <Link to="https://docs.arkyn.dev/docs/support">Support</Link>
              <Link to="https://docs.arkyn.dev/docs/privacy">
                Privacy policy
              </Link>
              <a href="mailto:lucasgoncalvesgithub@gmail.com">Contact us</a>
            </div>
          </ColumnsContainer>
        </NavSection>

        <Divider />

        <CodeSection>
          <code>Copyright © 2025 Arkyn</code>
          <ul>
            <a href="https://github.com/Lucas-Eduardo-Goncalves/arkyn">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/lucas-eduardo-goncalves">
              <Linkedin />
            </a>
          </ul>
        </CodeSection>
      </Content>
    </MainFooterContainer>
  );
}

export { MainFooter };

import React from "react";
import { Reaction } from "/client/api";
import { registerComponent } from "@reactioncommerce/reaction-components";
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer bg-light" style={{ backgroundColor: "#FFF", height: "140px", paddingTop: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <Link to={Reaction.Router.pathFor("about")}>
                    <h6 style={{ color: "#007bff" }}>Om L'COCO</h6>
                  </Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <Link to={Reaction.Router.pathFor("contact")} >
                    <h6 style={{ color: "#007bff" }}>Kontakta oss</h6>
                  </Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <Link to={Reaction.Router.pathFor("privacy")} >
                    <h6 style={{ color: "#007bff" }}>Sekretess & Säkerhet</h6>
                  </Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <Link to={Reaction.Router.pathFor("term")} >
                    <h6 style={{ color: "#007bff" }}>Köpvillkor</h6>
                  </Link>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">&copy; L'COCO 2018. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LCoco-237834520105943/">
                    <i className="fa fa-facebook fa-2x fa-fw" style={{ color: "#007bff" }} />
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/LCOCO20">
                    <i className="fa fa-twitter fa-2x fa-fw" style={{ color: "#007bff" }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lcocoofficial/">
                    <i className="fa fa-instagram fa-2x fa-fw" style={{ color: "#007bff" }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/add/lcocoofficial">
                    <i className="fa fa-snapchat fa-2x fa-fw" style={{ color: "#007bff" }} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCYbMd2vOjRqW17oPVWSPGTw?view_as=subscriber">
                    <i className="fa fa-youtube fa-2x fa-fw" style={{ color: "#007bff" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


registerComponent("Footer", Footer);

export default Footer;

import React, { useState, useEffect, useRef } from "react";
import "../styles/style.scss";
import { Collapse } from "react-bootstrap";
import Draggable from "react-draggable"; // The default
import languages from "../components/languages";

const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ConfigurationsContent = () => {
  const [email, setEmail] = useState("");
  let langs = [];
  for (let key in languages) {
    langs.push([languages[key]["name"], languages[key]["nativeName"]]);
  }

  return (
    <>
      <form>
        <select>
          {langs.map(lang => (
            <option disabled={!/[a-zA-Z]/.test(lang[1])} value="lang">
              {lang[0]}
            </option>
          ))}
        </select>
      </form>
      <br />
      <button
        className="btn btn-sm btn-primary btn-block text-uppercase"
        type="submit"
        style={{ maxWidth: "10em" }}
      >
        save
      </button>
      <br />
      <br />
      <form>
        <input type="checkbox" name="not1" value="not1" />
        Notificaiton
        <br />
        <input type="checkbox" name="not2" value="not2" />
        Types
        <br />
        <input type="checkbox" name="not3" value="not3" checked />
        To Display
        <br />
      </form>
      <br />
      <button
        className="btn btn-sm btn-primary btn-block text-uppercase"
        type="submit"
        style={{ maxWidth: "10em" }}
      >
        save
      </button>
      <br />
      <br />
      <form className="form-email" id="form-email">
        <input
          type="text"
          id="login"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autofocus
        />
      </form>

      <br />
      <button
        className="btn btn-sm btn-primary btn-block text-uppercase"
        type="submit"
        disabled={!emailregex.test(email)}
        style={{ maxWidth: "10em" }}
      >
        save
      </button>
      <p>
        The button will not work unless the input string matches the following
        regex
      </p>
      <pre>
        {
          '/^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/'
        }
      </pre>
    </>
  );
};
const Collapsible = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        className="list-group-item"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="icon">
          <i className={open ? "fas fa-minus-square" : "fas fa-plus-square"} />
        </span>
        &nbsp;{title}
      </li>
      <Collapse in={open}>
        <ul className="list-group">{children}</ul>
      </Collapse>
    </>
  );
};

function getNotificationClass() {
  const NotificationClasses = [
    "alert alert-danger",
    "alert alert-info",
    "alert alert-warning"
  ];

  // random item from array
  return NotificationClasses[
    Math.floor(Math.random() * NotificationClasses.length)
  ];
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const HomeContent = () => {
  const [open, setOpen] = useState(true);
  return (
    <Draggable>
      <div
        className="draggable"
        style={{ height: open ? "150px" : "30px", background: "#f44" }}
      >
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="btn btn-secondary"
        >
          toggle collapse
        </button>
        This is DRAGGABLE!
      </div>
    </Draggable>
  );
};

export default () => {
  const [activePage, setActivePage] = useState({
    title: "Dashboard",
    content: <HomeContent />
  });

  const [notifications, setNotifications] = useState([]);

  /*
   * set up an interval
   * to randomize the delay
   * of the other interval =) looked like the easiest way
   * to do it with react hooks
   */
  let delay = 5000;
  useInterval(() => {
    delay = Math.floor(Math.random() * 5000 + 5000);
  }, 5000);
  useInterval(() => {
    setNotifications([...notifications, getNotificationClass()]);
  }, delay);

  const MenuItem = ({ icon, title, content }) => (
    <li
      className="list-group-item"
      onClick={() => setActivePage({ title: title, content: content })}
    >
      {icon && (
        <span className="icon">
          <i className={icon} />
        </span>
      )}
      {title}
    </li>
  );

  const StatisticsItems = [
    { title: "Tests", content: "Tests" },
    { title: "Devices", content: "Devices" },
    { title: "Builds", content: "Builds" },
    { title: "Services", content: "Services" },
    { title: "Projects", content: "Projects content" }
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <div className="notifications">
          {notifications.map(cls => (
            <div className={cls} role="alert">
              This is a info alert—check it out!
            </div>
          ))}
        </div>
        <div className="controls">
          <button
            onClick={() => setNotifications([])}
            type="button"
            className="btn btn-secondary"
          >
            Clear notifications
          </button>
        </div>
      </header>
      <aside className="sidebar">
        <ul className="list-group">
          <MenuItem
            title="Dashboard"
            icon="fas fa-bars"
            content={<HomeContent />}
          />
          <Collapsible title="Statistics">
            {StatisticsItems.map(item => (
              <MenuItem title={item.title} content={item.content} />
            ))}
          </Collapsible>
          <Collapsible title="Reports">
            <MenuItem title="Tests" />
            <MenuItem title="Devices" />
            <MenuItem title="Builds" />
            <MenuItem title="Services" />
            <MenuItem title="Projects" />
          </Collapsible>
          <MenuItem
            title="Configurations"
            icon="fas fa-cog"
            content={<ConfigurationsContent />}
          />
          <Collapsible title="Overview">
            <MenuItem title="Tests" />
            <MenuItem title="Devices" />
            <MenuItem title="Builds" />
            <MenuItem title="Services" />
            <MenuItem title="Projects" />
          </Collapsible>
        </ul>
      </aside>
      <section className="content" id="content">
        <h1>{activePage.title}</h1>
        {activePage.content}
      </section>
    </div>
  );
};

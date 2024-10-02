import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CgDanger } from 'react-icons/cg';
import {
  FaClipboardList,
  FaEdit,
  FaHome,
  FaUsers,
} from 'react-icons/fa';

import { IoLogOut } from 'react-icons/io5';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.scss';


const SidebarComponent = () => {

  const [burgerShow, setBurgerShow] = useState(false);
  const [urlParam, setUrlParam] = useState(window.location.pathname.split('/').pop(),);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <Sidebar
        className="sidebar-dashboard"
        backgroundColor="#26282b"
        collapsed={burgerShow}
      >

        <Menu iconShape="square">
          <MenuItem
            active={urlParam === "dashboard" ? true : false}
            onClick={() => setUrlParam("dashboard")}
            icon={<FaHome />}
            className="sidebar-menu-design  sidebar-menu-design-custom"
          >
            <Link className="nav-link" to={"/admin/dashboard"}>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem
            active={urlParam === "users" ? true : false}
            onClick={() => setUrlParam("users")}
            icon={<FaUsers  />}
            className="sidebar-menu-design  sidebar-menu-design-custom"
          >
            <Link className="nav-link" to={"/admin/users"}>
            Users
            </Link>
          </MenuItem>
          <MenuItem
            active={urlParam === "Reported" ? true : false}
            onClick={() => setUrlParam("reported")}
            icon={<FaClipboardList   />}
            className="sidebar-menu-design  sidebar-menu-design-custom"
          >
            <Link className="nav-link" to={"/admin/reported"}>
            Reported
            </Link>
          </MenuItem>

          <MenuItem
            active={urlParam === "Reporting" ? true : false}
            onClick={() => setUrlParam("Reporting")}
            icon={<FaClipboardList />}
            className="sidebar-menu-design  sidebar-menu-design-custom"
          >
            <Link className="nav-link" to={"/admin/reporting"}>
            Reporting
            </Link>
          </MenuItem>

          <MenuItem
            active={urlParam === "Privacy" ? true : false}
            onClick={() => setUrlParam("Privacy")}
            icon={<FaEdit />}
            className="sidebar-menu-design  sidebar-menu-design-custom"
          >
          <Link className="nav-link" to={"/admin/privacy"}>
          Privacy Policy
            </Link>
          </MenuItem>

          <MenuItem
            active={urlParam === "Terms" ? true : false}
            onClick={() => setUrlParam("Terms")}
            icon={<FaEdit />}
            className="sidebar-menu-design  sidebar-menu-design-custom"
          >
          <Link className="nav-link" to={"/admin/terms"}>
          Terms & Services
            </Link>
          </MenuItem>

          <MenuItem
            onClick={() => setModalShow(true)}
            icon={<IoLogOut />}
            className="sidebar-menu-design sidebar-menu-design-custom"
          >
            Logout
          </MenuItem>

        </Menu>

      </Sidebar>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="d-flex gap-2"><h4 className="mb-0 text-danger"><CgDanger /> </h4> <h6 className="my-auto">
          Are you sure you want to logout ?
        </h6></div> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            No
          </Button>
          <Button variant="primary" onClick={() => logOut()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal >

    </>
  );
};

export default SidebarComponent;
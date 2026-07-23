import { NavLink } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <h2 className="mb-8 text-2xl font-bold">
        Hospital CMS
      </h2>

      <nav className="flex flex-col gap-2">
        <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </aside>
  );
}
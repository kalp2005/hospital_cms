import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import PagesPage from "@/features/pages/pages/PagesPage";
import BlogsPage from "@/features/blogs/pages/BlogsPage";
import GalleryPage from "@/features/gallery/pages/GalleryPage";
import CareersPage from "@/features/careers/pages/CareersPage";

import MenusPage from "@/features/menus/pages/MenusPage";
import MediaPage from "@/features/media/pages/MediaPage";
import SeoPage from "@/features/seo/pages/SeoPage";

import FormSubmissionsPage from "@/features/form-submissions/pages/FormSubmissionsPage";
import UsersPage from "@/features/users/pages/UsersPage";
import RolesPage from "@/features/roles/pages/RolesPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";

import { ROUTES } from "./routes";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<Navigate to={ROUTES.LOGIN} replace />}
        />

        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </Route>

        {/* CMS */}
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />

          {/* Content */}
          <Route path={ROUTES.PAGES} element={<PagesPage />} />
          <Route path={ROUTES.BLOGS} element={<BlogsPage />} />
          <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
          <Route path={ROUTES.CAREERS} element={<CareersPage />} />

          {/* Website */}
          <Route path={ROUTES.MENUS} element={<MenusPage />} />
          <Route path={ROUTES.MEDIA} element={<MediaPage />} />
          <Route path={ROUTES.SEO} element={<SeoPage />} />

          {/* System */}
          <Route
            path={ROUTES.FORM_SUBMISSIONS}
            element={<FormSubmissionsPage />}
          />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.ROLES} element={<RolesPage />} />
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<Navigate to={ROUTES.DASHBOARD} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
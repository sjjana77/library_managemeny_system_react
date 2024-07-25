// src/routes/Router.js
import React from "react";
import { BrowserRouter as Routerr, Route, Routes } from "react-router-dom";
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import BookCatalog from '../components/BookCatalog';
import AddOrEditBook from '../components/AddOrEditBook';
import BookEntry from '../components/BookEntry';
import Transactions from '../components/Transactions';
import ProtectedRoute from '../routes/ProtectedRoute';

const Router = () => {
  return (
    <Routerr>
      <div style={{ margin: '0 20px' }}>
        <Routes>
          <Route exact path="/library_managemeny_system" element={<Login />} />
          <Route exact path="/library_managemeny_system/register" element={<Register />} />
          <Route
            path="/library_managemeny_system/books_catalog"
            element={
              <ProtectedRoute>
                <Header />
                <BookCatalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library_managemeny_system/register_user"
            element={
              <ProtectedRoute>
                <Header />
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library_managemeny_system/books/add"
            element={
              <ProtectedRoute adminOnly={true}>
                <Header />
                <AddOrEditBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library_managemeny_system/books/edit/:id"
            element={
              <ProtectedRoute adminOnly={true}>
                <Header />
                <AddOrEditBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library_managemeny_system/books/borrow-return/:bookId"
            element={
              <ProtectedRoute adminOnly={true}>
                <Header />
                <BookEntry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library_managemeny_system/transactions"
            element={
              <ProtectedRoute>
                <Header />
                <Transactions />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Routerr>
  );
}

export default Router;

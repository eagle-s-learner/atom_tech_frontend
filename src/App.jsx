function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/create" element={<CreateUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;

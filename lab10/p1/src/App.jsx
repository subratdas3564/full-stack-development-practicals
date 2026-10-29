import './App.css'

function App() {
  const stats = [
    { label: 'Total Students', value: '1,248' },
    { label: 'Active Courses', value: '42' },
    { label: 'Attendance', value: '96%' },
  ]

  const students = [
    { name: 'Aisha Patel', course: 'Computer Science', status: 'Present' },
    { name: 'Daniel Kim', course: 'Business Admin', status: 'Late' },
    { name: 'Lina Hassan', course: 'Design', status: 'Present' },
  ]

  return (
    <main className="student-app">
      <header className="topbar">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Student Management</h1>
        </div>
        <button type="button" className="primary-btn">Add Student</button>
      </header>

      <section className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Recent Students</h2>
          <button type="button" className="secondary-btn">View All</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <span className={`status ${student.status.toLowerCase()}`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default App

export const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  return (
    <div>
      <div>
        <header>
          <h1>Generation Thailand <br />React - Assessment</h1>
        </header>
        <a href="/user"><button>User Home Sector</button></a>
        <a href="/admin"><button>Admin Home Sector</button></a>
      </div>
    </div>
  )
}

export default Home


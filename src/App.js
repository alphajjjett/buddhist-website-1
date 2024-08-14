import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  
  return (
    <div className="background">
        <nav className="nav-bar">
          <div className="nav-logo">
          <img src="./logo192.png" alt="Logo" />
          </div>          
        <ul className="navbar-links">
          <li><a href="home">อ่าน</a></li>
          <li><a href="about">ทำ</a></li>
          <li><a href="services">ไม</a></li>
        </ul>
        </nav>
  
    <Card style={{ width: '100%' }}>
      <Card.Body className="d-flex align-items-center">
        <img 
          src="https://dz.lnwfile.com/ae26i6.jpg" 
          alt="Cardimg" 
          className="card-img-left" 
          />
        <div>
          <Card.Title>
            <h1>แต่ละมื้อแต่ละ Day</h1>
          </Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. 
              Per aliquam vivamus aliquet egestas purus est condimentum morbi penatibus? Dolor nibh scelerisque interdum purus dis. 
              Magna ad aptent aliquet consequat massa adipiscing litora elit.
             At lectus aptent nullam placerat vitae cubilia. Netus sociosqu etiam lacus est tellus.
            </p>
          </Card.Text>
          <Button> อ่านเพิ่มเติม </Button>
        </div>
      </Card.Body>
    </Card>
        
    </div>
   
  );
}

export default App;

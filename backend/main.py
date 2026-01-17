from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, schemas, apis
from database import engine, SessionLocal
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="HRMS Lite")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Employee Management
@app.post("/employees", response_model=schemas.EmployeeResponse)
def create_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    return apis.create_employee(db, employee)

@app.get("/employees", response_model=list[schemas.EmployeeResponse])
def list_employees(db: Session = Depends(get_db)):
    return apis.get_employees(db)

# Attendance Management
@app.post("/attendance", response_model=schemas.AttendanceResponse)
def mark_attendance(attendance: schemas.AttendanceCreate, db: Session = Depends(get_db)):
    return apis.mark_attendance(db, attendance)

@app.get("/attendance/{employee_id}", response_model=list[schemas.AttendanceResponse])
def view_attendance(employee_id: int, db: Session = Depends(get_db)):
    return apis.get_employee_attendance(db, employee_id)

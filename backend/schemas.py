from datetime import date
from pydantic import BaseModel

class EmployeeCreate(BaseModel):
    name: str
    email: str
    department: str
    date_joined: date

class EmployeeResponse(EmployeeCreate):
    id: int

    class Config:
        orm_mode = True


class AttendanceCreate(BaseModel):
    employee_id: int
    date: date
    status: str  


class AttendanceResponse(AttendanceCreate):
    id: int

    class Config:
        orm_mode = True

# Flowchart: Student Grading System

```mermaid
graph TD
    Start["Start"] --> AddStudent["Add a new student?"]
    AddStudent -- "Yes" --> EnterStudent["Enter student name and ID"]
    AddStudent -- "No" --> AssignGrade["Assign grade to a student?"]
    EnterStudent --> AssignGrade
    AssignGrade -- "Yes" --> EnterGrade["Enter student ID and grade"]
    EnterGrade --> StudentFound{"Is student found?"}
    StudentFound -- "Yes" --> AddGrade["Add grade to the student's record"]
    StudentFound -- "No" --> Error["Display error: Student not found"]
    AddGrade --> CalculateAvg["Calculate class average"]
    Error --> CalculateAvg
    AssignGrade -- "No" --> CalculateAvg
    CalculateAvg --> DisplayResults["Show class average and student details"]
    DisplayResults --> End["End"]


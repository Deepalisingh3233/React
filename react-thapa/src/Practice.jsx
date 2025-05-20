export const Practice = () => {
    const student = [];
    return (
        <>
            {/* <p>{student.length && "No of Students found"}</p> */}
            {/* 1st */}
            {/* <p>{student.length === 0 && "No of Students found"}</p> */}
            {/* 2nd */}
            {/* <p>{!student.length === 0 && "No of Students found"}</p> */}
            {/* 3rd */}
            <p>{!Boolean(student.length) && "No of Students found"}</p>
            <p>Number of Students : {student.length}</p>
        </>
    )
}
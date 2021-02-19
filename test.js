 const handleReset = () => {
        handlePeriodStartDate()
        handlePeriodEndDate()
        setselectedroomtype('0')
        setselectbldgname('ALL;')
        setselectfloor("ALL;")
        setselectgender("ALL;")
        setselectedtag("'ALL;'")

        bedVacantStatus(propdata)
        roomStatus(propdata)
    }

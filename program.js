function getSelectValue()
       {

            let programList = document.getElementById("program-dropdown");

            let courseList = document.getElementById("course-dropdown");

            let programListSelectedValue = programList.options[programList.selectedIndex].value;

			
            if (programListSelectedValue == 'BIT')
            {
            	courseList.options.length = 0;
            	courseList.options[0] = new Option('--Select--', '');
            	courseList.options[1] = new Option('ACCT-1065 Financial Accounting for IT','');
				courseList.options[2] = new Option('ADEV-1003 Programming 1','');
				courseList.options[3] = new Option('COMM-1148 Communications for BIT','');
				courseList.options[4] = new Option('COMP-1216 Information Systems','');
				courseList.options[5] = new Option('MATH-1028 Statistics for BIT','');
				courseList.options[6] = new Option('MATH-1029 Math for BIT','');
				courseList.options[7] = new Option('PDEV-1100 Professional Development 1','');
				courseList.options[8] = new Option('ADEV-2005 Programming 2','');
				courseList.options[9] = new Option('COMP-1215 OO System Analysis','');
				courseList.options[10] = new Option('DBMS-1000 Database Management Systems 1','');
				courseList.options[11] = new Option('NTWK-1000 Network Computing 1','');
				courseList.options[12] = new Option('PDEV-2100 Professional Development 2','');
				courseList.options[13] = new Option('WEBD-1000 Web Development 1','');
				courseList.options[14] = new Option('COMP-2028 OO System Design','');
				courseList.options[15] = new Option('DBMS-2004 Database Management Systems 2','');
				courseList.options[16] = new Option('NTWK-2005 Server Administration','');
				courseList.options[17] = new Option('PDEV-3100 Professional Development 3','');
				courseList.options[18] = new Option('WEBD-2006 Web Development 2','');
				courseList.options[19] = new Option('ADEV-3000 Programming 3','');
				courseList.options[20] = new Option('NTWK-2000 Network Computing 2','');
				courseList.options[21] = new Option('PROJ-2006 Industry Project','');
				courseList.options[22] = new Option('WRKE-2024 Co-Operative Work Experience','');
				courseList.options[23] = new Option('BUSA-2007 Business and Management for Information Technology','');
				courseList.options[24] = new Option('BUSA-2008 Business Issues','');
				courseList.options[25] = new Option('PDEV-4100 Professional Development 4','');
				courseList.options[26] = new Option('ADEV-2007 Mobile Application Development','');
				courseList.options[27] = new Option('ADEV-3001 Programming 4','');
				courseList.options[28] = new Option('DBMS-2003 Data Warehousing','');
				courseList.options[29] = new Option('DBMS-2005 Database Management Systems 3','');
				courseList.options[30] = new Option('NTWK-2001 Linux/Unix Administration','');
				courseList.options[31] = new Option('NTWK-2003 Advanced Windows Server','');
				courseList.options[32] = new Option('NTWK-2006 Network Security','');
				courseList.options[33] = new Option('NTWK-3001 Network Computing 4','');
				courseList.options[34] = new Option('NTWK-3002 Network Computing 3','');
				courseList.options[35] = new Option('PROJ-2009 Project Management for Information Technology','');
				courseList.options[36] = new Option('WEBD-2003 Web Security','');
				courseList.options[37] = new Option('WEBD-2007 Full-Stack Web Development','');
				

				let courseOption;
				let courseValue;
				let i;
				let courseListSelectedValue;


				for (i=0; i<courseList.options.length; i++)
				{
					courseOption = document.createElement("option");
					courseOption.innerHTML = courseList.options[i];

					courseValue = document.createAttribute("value");
				
					courseValue.value = courseOption.innerHTML;
					courseOption.setAttributeNode(courseValue);

				}
							 
				courseListSelectedValue = courseList.options[courseList.options.selectedIndex].value;
            }
            else if (programListSelectedValue == 'BTM')     
            {
            	courseList.options.length = 0;
            	courseList.options[0] = new Option('--Select--', '');

            	courseList.options[1] = new Option('ACCT-1065 Financial Accounting for IT', '');
            	courseList.options[2] = new Option('COMM-1134 Communications for BTM', '');
				courseList.options[3] = new Option('COMP-1029 Introduction to Programming Logic', '');
				courseList.options[4] = new Option('COMP-1975 Business Computing', '');
				courseList.options[5] = new Option('MATH-1053 Math for BTM', '');
				courseList.options[6] = new Option('MATH-1065 Statistics for BTM', '');
				courseList.options[7] = new Option('PDEV-1100 Professional Development 1', '');
				courseList.options[8] = new Option('ADEV-1003 Programming 1', '');
				courseList.options[9] = new Option('ADMN-1004 Organizational Behaviour', '');
				courseList.options[10] = new Option('BUSA-1062 Introduction to Business Analysis', '');
				courseList.options[11] = new Option('BUSA-1065 Management Information Systems', '');
				courseList.options[12] = new Option('BUSA-2009 Business Requirements Gathering for BTM', '');
				courseList.options[13] = new Option('PDEV-2100 Professional Development 2', '');
				courseList.options[14] = new Option('PROJ-1003 Introduction to Project Management', '');
				courseList.options[15] = new Option('ACCT-2020 Managerial Accounting for IT', '');
				courseList.options[16] = new Option('COMP-2030 Business System Testing for BTM', '');
				courseList.options[17] = new Option('COMP-2035 Business Systems Design for BTM', '');
				courseList.options[18] = new Option('DBMS-1000 Database Management Systems 1', '');
				courseList.options[19] = new Option('PDEV-3100 Professional Development 3', '');
				courseList.options[20] = new Option('PROJ-2010 Project Methodologies and Business Proc', '');
				courseList.options[21] = new Option('WEBD-1000 Web Development 1', '');
				courseList.options[22] = new Option('PROJ-2006 Industry Project', '');
				courseList.options[23] = new Option('WRKE-2024 Co-Operative Work Experience', '');
				courseList.options[24] = new Option('ADMN-1003 Business Law for IT', '');
				courseList.options[25] = new Option('BUSA-2007 Business and Management for Information Technology', '');
				courseList.options[26] = new Option('ECON-1004 Intro to Economics', '');
				courseList.options[27] = new Option('FNCE-2001 Business Finance for IT', '');
				courseList.options[28] = new Option('NTWK-1001 Network Architecture', '');
				courseList.options[29] = new Option('PDEV-4100 Professional Development 4', '');
				courseList.options[30] = new Option('PROJ-2011 Project Planning and Estimation', '');

				let courseOption;
				let courseValue;
				let i;
				let courseListSelectedValue;


				for (i=0; i<courseList.options.length; i++)
				{
					courseOption = document.createElement("option");
					courseOption.innerHTML = courseList.options[i];

					courseValue = document.createAttribute("value");
				//	courseValue.value = courseList.options[i].substr(0, 9); // copy course code into value attribute including hyphen
					courseValue.value = courseOption.innerHTML;
					courseOption.setAttributeNode(courseValue);

				}
							 
				courseListSelectedValue = courseList.options[courseList.options.selectedIndex].value;

            }
        }



function getCourseInfo()
{

		let getVisibility = document.getElementsByClassName("visibility")[0];
		
		getVisibility.style = "display: block;"

		let tableShow = document.getElementsByClassName("table")[0];
		tableShow.style = "background: white;"
		tableShow.style = "display: block;"
	
}

function showSelectedTime()
{
	let timesOnSchedule = document.getElementsByClassName("times");

	if (timesOnSchedule[0].checked)
	{
		var mondayEight = document.getElementsByClassName("monday_eight")[0];
		mondayEight.style = "background: yellow";

		var mondayNine = document.getElementsByClassName("monday_nine")[0];
		mondayNine.style = "background: yellow";

		var tuesdayTen = document.getElementsByClassName("tuesday_ten")[0];
		tuesdayTen.style = "background: yellow";

		var tuesdayEleven = document.getElementsByClassName("tuesday_eleven")[0];
		tuesdayEleven.style = "background: yellow";

		var tuesdayTwelve = document.getElementsByClassName("tuesday_twelve")[0];
		tuesdayTwelve.style = "background: yellow";
		
		var wednesdayOne = document.getElementsByClassName("wednesday_one")[0];
		wednesdayOne.style = "background: white";

		var wednesdayTwo = document.getElementsByClassName("wednesday_two")[0];
		wednesdayTwo.style = "background: white";

	}
	else if (timesOnSchedule[1].checked)
	{
		var mondayEight = document.getElementsByClassName("monday_eight")[0];
		mondayEight.style = "background: white";

		var mondayNine = document.getElementsByClassName("monday_nine")[0];
		mondayNine.style = "background: white";

		var tuesdayTen = document.getElementsByClassName("tuesday_ten")[0];
		tuesdayTen.style = "background: yellow";

		var tuesdayEleven = document.getElementsByClassName("tuesday_eleven")[0];
		tuesdayEleven.style = "background: yellow";

		var tuesdayTwelve = document.getElementsByClassName("tuesday_twelve")[0];
		tuesdayTwelve.style = "background: yellow";

		var wednesdayOne = document.getElementsByClassName("wednesday_one")[0];
		wednesdayOne.style = "background: yellow";

		var wednesdayTwo = document.getElementsByClassName("wednesday_two")[0];
		wednesdayTwo.style = "background: yellow";

	}

}


function resetForm()
{
		let getVisibility = document.getElementsByClassName("visibility")[0];
		
		getVisibility.style = "display: none;"

		let tableClear = document.getElementsByClassName("table")[0];
		tableClear.style = "display: none;"

		let courseClear = document.getElementById("course-dropdown");
		courseClear.selectedIndex = "0";
}


getSelectValue();
getCourseInfo();
showSelectedTime();
resetForm();
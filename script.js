function insert_Row() {
    //Write your code here
  const tr = document.createElement("tr");
	tr.innerHTML = "<td>New Cell</td><td>New Cell2</td>"
	const table = document.getElementById("sampleTable")
	table.prepend(tr)
  
}

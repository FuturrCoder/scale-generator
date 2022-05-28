const allScales = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"]

for (const scale of allScales) {
    document.getElementById("options").innerHTML += `${scale}:
<label for="${scale}-major">Major: </label><input type="checkbox" id="${scale}-major" checked>
<label for="${scale}-minor">Minor: </label><input type="checkbox" id="${scale}-minor" checked><br>`
}

function gen() {
    let selected = []
    for (const scale of allScales) {
        let major = document.getElementById(scale + "-major")
        let minor = document.getElementById(scale + "-minor")
        if (major.checked) {
            selected.push(scale + " major")
        }
        if (minor.checked) {
            selected.push(scale + " minor")
        }
    }
    if (selected.length === 0) {
        alert("Need at least one scale")
    } else {
        let scale = selected[Math.floor(Math.random() * selected.length)]
        document.getElementById("output").innerHTML = scale
        if (document.getElementById("removeUsed").checked) {
            document.getElementById(scale.replace(" ", "-")).checked = false;
        }
    }
}
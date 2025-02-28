function hitungAngsuran() {
    let bppPokok = parseFloat(document.getElementById('bpp_pokok').value) || 0;
    let bppSks = parseFloat(document.getElementById('bpp_sks').value) || 0;
    
    let angsuran2 = (0.25 * bppPokok) + (0.20 * bppSks);
    let angsuran3 = (0.25 * bppPokok) + (0.20 * bppSks);
    let angsuran4 = 0.30 * bppSks;
    let angsuran5 = 0.30 * bppSks;
    let total = angsuran2 + angsuran3 + angsuran4 + angsuran5;
    
    document.getElementById('hasil').innerHTML = `
        <p>Angsuran ke-2: Rp ${angsuran2.toFixed(2)}</p>
        <p>Angsuran ke-3: Rp ${angsuran3.toFixed(2)}</p>
        <p>Angsuran ke-4: Rp ${angsuran4.toFixed(2)}</p>
        <p>Angsuran ke-5: Rp ${angsuran5.toFixed(2)}</p>
        <p><strong>Total Keseluruhan: Rp ${total.toFixed(2)}</strong></p>
    `;
}

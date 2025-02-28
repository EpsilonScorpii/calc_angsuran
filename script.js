function formatRupiah(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function hitungAngsuran() {
    let bppPokok = parseFloat(document.getElementById('bpp_pokok').value) || 0;
    let bppSks = parseFloat(document.getElementById('bpp_sks').value) || 0;
    
    let angsuran2 = Math.round((0.25 * bppPokok) + (0.20 * bppSks));
    let angsuran3 = Math.round((0.25 * bppPokok) + (0.20 * bppSks));
    let angsuran4 = Math.round(0.30 * bppSks);
    let angsuran5 = Math.round(0.30 * bppSks);
    let total = angsuran2 + angsuran3 + angsuran4 + angsuran5;
    
    document.getElementById('hasil').innerHTML = `
        <p>Angsuran ke-2: Rp ${formatRupiah(angsuran2)}</p>
        <p>Angsuran ke-3: Rp ${formatRupiah(angsuran3)}</p>
        <p>Angsuran ke-4: Rp ${formatRupiah(angsuran4)}</p>
        <p>Angsuran ke-5: Rp ${formatRupiah(angsuran5)}</p>
        <p><strong>Total Keseluruhan: Rp ${formatRupiah(total)}</strong></p>
    `;
}

function decToFrac(dec) {
    i = 1;
    while ((dec*i)%1 != 0) {
        i += 1;
    }
    return [dec*i, i];
}
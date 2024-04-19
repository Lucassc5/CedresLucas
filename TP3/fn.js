function usuario() {
    fetch ('https://randomuser.me/api/${per}');
    .then (res => res.json());
    .then (data => data)
    data
}
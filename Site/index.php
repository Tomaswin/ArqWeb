<html>
  <head>
  </head>
  <body>
    <?php
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://localhost:3030/v1/reserva");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $res = curl_exec($ch);
    $result = json_decode($res, true);
    curl_close($ch);
    ?>
    <table>
      <tr>
        <th>Id de reserva</th>
        <th>Fecha de reserva</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Telefono</th>
      </tr>
    <?php
    foreach($result["data"] as $reserva): ?>
        <tr>
            <td><?=$reserva["_id"];?></td>
            <td><?=$reserva["date"];?></td>
            <td><?=$reserva["name"];?></td>
            <td><?=$reserva["email"];?></td>
            <td><?=$reserva["phone"];?></td>
        </tr>
    <?php
    endforeach;
    ?>
    </table>
    <form action="addReserva.php" method="get">
      <p><input type="submit" /></p>
    </form>
    <form action="updateReserva.php" method="get">
      <p><input type="submit" /></p>
    </form>
    <form action="removeReserva.php" method="get">
      <p><input type="submit" /></p>
    </form>
  </body>
</html>

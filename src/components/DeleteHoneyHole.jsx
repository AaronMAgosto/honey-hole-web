import { Button } from "react-bootstrap";
import { useState } from "react";

export default function DeleteHoneyHole({ taskId, honeyHole, setHoneyHole }) {
  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`https://honey-hole-aa.web.app/`)
  }
}
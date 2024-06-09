// components/Contact.js

import React from "react";
import { Card, Input, Grid, Text } from "@nextui-org/react";
import { Mail, Phone, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Body>
            <Text h4>Email</Text>
            <Input
              contentLeft={<Mail />}
              initialValue="example@example.com"
              readOnly
              fullWidth
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Body>
            <Text h4>Mobile</Text>
            <Input
              contentLeft={<Phone />}
              initialValue="+1234567890"
              readOnly
              fullWidth
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Body>
            <Text h4>LinkedIn</Text>
            <Link
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
            >
              <Input
                contentLeft={<Linkedin />}
                initialValue="your-profile"
                readOnly
                fullWidth
              />
            </Link>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default Contact;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import admin from "@/data/admin.json";

import PageLayout from "@/components/layout/PageLayout/PageLayout";
import Container from "@/components/layout/Container/Container";
import Section from "@/components/ui/section/Section";
import GlassCard from "@/components/ui/card/GlassCard";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/button";
import { saveAdminSession } from "@/lib/auth";

function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(admin.email);
  const [password, setPassword] = useState(admin.password);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim() !== admin.email || password !== admin.password) {
      setError("Email atau password admin tidak sesuai.");
      return;
    }

    saveAdminSession({
      email: admin.email,
      name: admin.name,
      loggedInAt: new Date().toISOString(),
    });

    const destination =
      (location.state as { from?: string } | null)?.from ?? "/dashboard";
    navigate(destination, { replace: true });
  };

  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
            <GlassCard className="w-full p-8">
              <div className="mb-8 space-y-3 text-center">
                <Heading className="text-3xl">Login Admin</Heading>

                <Text>
                  Masuk untuk melihat alur dashboard HVZMobilindo.
                </Text>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Email Admin"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  placeholder="admin@hvzmobilindo.com"
                  autoComplete="email"
                />

                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  placeholder="Masukkan password"
                  autoComplete="current-password"
                  error={error}
                />

                <Button type="submit" variant="gold" className="w-full">
                  Masuk Dashboard
                </Button>
              </form>
            </GlassCard>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}

export default AdminLoginPage;

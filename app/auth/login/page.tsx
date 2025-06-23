"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log("Login attempt:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KL</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">KosLoop</span>
            </div>
            <CardTitle className="text-2xl">Masuk ke Akun</CardTitle>
            <CardDescription>Masuk dengan email mahasiswa untuk melanjutkan</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Mahasiswa</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@kampus.ac.id"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Ingat saya
                  </Label>
                </div>
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Lupa password?
                </Link>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Masuk
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Belum punya akun?{" "}
                <Link href="/auth/register" className="text-blue-600 hover:underline font-medium">
                  Daftar sekarang
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Dengan masuk, Anda menyetujui{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Syarat & Ketentuan
                </Link>{" "}
                dan{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Kebijakan Privasi
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

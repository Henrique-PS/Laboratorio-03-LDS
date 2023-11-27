-- CreateTable
CREATE TABLE "students" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "rg" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "moedas" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_password_key" ON "students"("password");

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "students_rg_key" ON "students"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "students_matricula_key" ON "students"("matricula");

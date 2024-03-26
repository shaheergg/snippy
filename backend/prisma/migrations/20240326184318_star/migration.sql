/*
  Warnings:

  - Added the required column `starred` to the `SnippetStar` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SnippetStar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "snippetId" INTEGER NOT NULL,
    "starred" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "SnippetStar_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SnippetStar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SnippetStar" ("id", "snippetId", "userId") SELECT "id", "snippetId", "userId" FROM "SnippetStar";
DROP TABLE "SnippetStar";
ALTER TABLE "new_SnippetStar" RENAME TO "SnippetStar";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

import expect from "expect";
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functionsSuite";

test ("capitalize aniket to equal Aniket", () => {
    expect(capitalize("aniket")).toBe("Aniket");
})

test ("reverse aniket to equal tekina", () => {
    expect(reverseString("aniket")).toBe("tekina");
})

test ("calculator add 1 + 2 to equal 3", () => {
    expect(calculator["add"](1, 2)).toBe(3);
})

test ("calculator subtract 1 - 2 to equal -1", () => {
    expect(calculator["subtract"](1, 2)).toBe(-1);
})

test ("calculator multiply 2 * 3 to equal 6", () => {
    expect(calculator["multiply"](2, 3)).toBe(6);
})

test ("calculator divide 1 / 2 to equal 0.5", () => {
    expect(calculator["divide"](1, 2)).toBeCloseTo(0.5);
})

test ("Caeser cipher of 'attack at dawn' with shift 5 to equal 'fyyfhp fy ifbs'", () => {
    expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
})

test ("Caeser cipher of 'attack: at, dawn!' with shift 12 to equal 'mffmow: mf, pmiz!'", () => {
    expect(caesarCipher("attack: at, dawn!", 12)).toBe("mffmow: mf, pmiz!");
})

test ("Caeser cipher of 'ATTACK: at, dawn!' with shift 12 to equal 'MFFMOW: mf, pmiz!'", () => {
    expect(caesarCipher("ATTACK: at, dawn!", 12)).toBe("MFFMOW: mf, pmiz!");
})

test ("Analyze array [1, 8, 3, 4, 2, 6] returns object with average 4", () => {
    expect(analyzeArray([1,8,3,4,2,6])["average"]).toBe(4);
})

test ("Analyze array [1, 8, 3, 4, 2, 6] returns object with length 6", () => {
    expect(analyzeArray([1,8,3,4,2,6])["length"]).toBe(6);
})

test ("Analyze array [1, 8, 3, 4, 2, 6] returns object with min 1", () => {
    expect(analyzeArray([1,8,3,4,2,6])["min"]).toBe(1);
})

test ("Analyze array [1, 8, 3, 4, 2, 6] returns object with max 8", () => {
    expect(analyzeArray([1,8,3,4,2,6])["max"]).toBe(8);
})
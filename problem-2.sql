SELECT E.id, SUM (budget) AS total_budgets
FROM employees AS E, projects AS P, employees_projects AS E_P
WHERE E.id = E_P.employee_id AND P.id = E_P.project_id
GROUP BY E.id
Order BY total_budgets;
